import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

function PolyglotCode({file, codes}) {
    const langs = ['javascript', 'python', 'ruby', 'kotlin', 'groovy'];
    for (const l of langs) {
        if (!codes.find(({lang}) => l === lang)) {
            const code = {...codes[0]};
            code.lang = l;
            codes.push(code);
        }
    }
    return (
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
    );
}

export default PolyglotCode;
