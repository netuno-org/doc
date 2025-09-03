import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

function PolyglotCode({file, codes}) {
    const langs = ['javascript', 'python', 'ruby', 'kotlin', 'groovy'];
    for (const l of langs) {
        if (!codes.find(({lang}) => l === lang)) {
            let code = null;
            if (l === 'ruby') {
                code = {...codes.find(({lang}) => 'python' === lang)};
            } else if (l === 'python') {
                code = {...codes.find(({lang}) => 'ruby' === lang)};
            }
            if (!code || Object.keys(code).length === 0) {
                code = {...codes[0]};
            }
            code.lang = l;
            if (l === 'ruby') {
                code.code = code.code.replaceAll(/([\[(,\s=ˆ])True([\]),\s$])/g, "$1true$2");
            } else if (l === 'python') {
                code.code = code.code.replaceAll(/([\[(,\s=ˆ])true([\]),\s$])/g, "$1True$2");
            }
            codes.push(code);
        }
    }
    const langsConst = {
        javascript: 'const ',
        python: '',
        ruby: '',
        kotlin: 'val ',
        groovy: 'def ',
    };
    for (const code of codes) {
        code.code = code.code.replaceAll(/$(\s+)const\s+/g, "$1"+ langsConst[code.lang]);
    }
    const langsComment = {
        javascript: '// ',
        python: '# ',
        ruby: '# ',
        kotlin: '// ',
        groovy: '// ',
    };
    for (const code of codes) {
        code.code = code.code.replaceAll(/(\s+)\/\/\s+/g, "$1"+ langsComment[code.lang]);
    }
    return (
        <div style={{marginBottom: '40px'}}>
            <Tabs groupId="polyglot">
                {codes.map(({lang, code}) => {
                    let title = file;
                    if (title) {
                        if (lang === 'javascript') {
                            title += '.js';
                        } else if (lang === 'python') {
                            title += '.py';
                        } else if (lang === 'ruby') {
                            title += '.rb';
                        } else if (lang === 'kotlin') {
                            title += '.kts';
                        } else if (lang === 'groovy') {
                            title += '.groovy';
                        }
                    }
                    const codeBlock = (
                        <CodeBlock
                            language={lang}
                            title={title}
                            showLineNumbers>
                            {code.substring(code.indexOf('\n') + 1, code.lastIndexOf('\n'))
                                .split('\n')
                                .reduce(({spaces, source}, line, index) => {
                                        if (index === 0) {
                                            spaces = line.match(/^\s*/)[0].length;
                                        }
                                        source += line.substring(spaces) + '\n';
                                        return {spaces, source};
                                    }, {spaces: 0, source: ''}
                                ).source
                            }
                        </CodeBlock>
                    );
                    if (lang === 'javascript') {
                        return (
                            <TabItem value={lang} label="JavaScript" default>
                                {codeBlock}
                            </TabItem>
                        );
                    } else if (lang === 'python') {
                        return (
                            <TabItem value={lang} label="Python">
                                {codeBlock}
                            </TabItem>
                        );
                    } else if (lang === 'ruby') {
                        return (
                            <TabItem value={lang} label="Ruby">
                                {codeBlock}
                            </TabItem>
                        );
                    } else if (lang === 'kotlin') {
                        return (
                            <TabItem value={lang} label="Kotlin">
                                {codeBlock}
                            </TabItem>
                        );
                    } else if (lang === 'groovy') {
                        return (
                            <TabItem value={lang} label="Groovy">
                                {codeBlock}
                            </TabItem>
                        );
                    }
                    return null;
                })}
            </Tabs>
        </div>
    );
}

export default PolyglotCode;
