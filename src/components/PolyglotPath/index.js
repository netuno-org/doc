import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

function PolyglotPath({files}) {
    const langs = ['javascript', 'python', 'ruby', 'kotlin', 'groovy'];
    return (
        <Tabs groupId="polyglot">
            {langs.map((lang) => {
                let extension = '';
                if (lang === 'javascript') {
                    extension += 'js';
                } else if (lang === 'python') {
                    extension += 'py';
                } else if (lang === 'ruby') {
                    extension += 'rb';
                } else if (lang === 'kotlin') {
                    extension += 'kts';
                } else if (lang === 'groovy') {
                    extension += 'groovy';
                }
                const list = (
                    <ul>
                        {files.map((file) =>
                            <li><code>{file}.{extension}</code></li>
                        )}
                    </ul>
                )
                if (lang === 'javascript') {
                    return (
                        <TabItem value={lang} label="JavaScript" default>
                            {list}
                        </TabItem>
                    );
                } else if (lang === 'python') {
                    return (
                        <TabItem value={lang} label="Python">
                            {list}
                        </TabItem>
                    );
                } else if (lang === 'ruby') {
                    return (
                        <TabItem value={lang} label="Ruby">
                            {list}
                        </TabItem>
                    );
                } else if (lang === 'kotlin') {
                    return (
                        <TabItem value={lang} label="Kotlin">
                            {list}
                        </TabItem>
                    );
                } else if (lang === 'groovy') {
                    return (
                        <TabItem value={lang} label="Groovy">
                            {list}
                        </TabItem>
                    );
                }
                return null;
            })}
        </Tabs>
    );
}

export default PolyglotPath;
