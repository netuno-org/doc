import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

function PolyglotCode({file, codes}) {
    const langs = ['javascript', 'python', 'ruby', 'kotlin', 'groovy'];
    for (const code of codes) {
        code.code = code.code.substring(code.code.indexOf('\n') + 1).trimEnd().split('\n')
            .reduce(({spaces, source}, line, index) => {
                    if (index === 0) {
                        spaces = line.match(/^\s*/)[0].length;
                    }
                    source += line.substring(spaces) + '\n';
                    return {spaces, source};
                }, {spaces: 0, source: ''}
            ).source;
    }
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
                code.code = code.code.split('\n')
                    .reduce(({spaces, indents, source}, line, index) => {
                        const lineSpaces = line.search(/\S/);
                        if (lineSpaces > spaces) {
                            indents++;
                        } else if (lineSpaces < spaces) {
                            indents--;
                        }
                        line = line.trim();
                        for (let i = 0; i < indents; i++) {
                            line = '    ' + line;
                        }
                        source += line + '\n';
                        spaces = lineSpaces;
                        return {spaces, indents, source};
                    }, {spaces: 0, indents: 0, source: ''}
                ).source;
            }
            code.lang = l;
            if (l === 'ruby') {
                code.code = code.code.replaceAll(/([\[(,\s=ˆ])(True|False)([\]),\s$])/gm, "$1$2$3");
            } else if (l === 'python') {
                code.code = code.code.replaceAll(/([\[(,\s=ˆ])(true|false)([\]),\s$])/gm, "$1$2$3");
            }
            codes.push(code);
        }
    }
    const keywords = [{
        javascript: 'const ',
        python: '',
        ruby: '',
        kotlin: 'val ',
        groovy: 'final ',
    }, {
        javascript: 'let ',
        python: '',
        ruby: '',
        kotlin: 'var ',
        groovy: 'def ',
    }];
    for (const code of codes) {
        for (const keyword of keywords) {
            code.code = code.code.replaceAll(new RegExp("$(\\s*([#/]*)\\s+)"+ keyword.javascript.trim() +"\\s+", "gm"), "$1"+ keyword[code.lang]);
        }
    }
    const langsComment = {
        javascript: '// ',
        python: '# ',
        ruby: '# ',
        kotlin: '// ',
        groovy: '// ',
    };
    for (const code of codes) {
        if (code.lang !== 'javascript') {
            code.code = code.code.replaceAll(/;(\s+)\/\/\s+/gm, "$1"+ langsComment[code.lang]);
        }
        code.code = code.code.replaceAll(/(\s+)\/\/\s+/gm, "$1"+ langsComment[code.lang]);
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
                            {code}
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
