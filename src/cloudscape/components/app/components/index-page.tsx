import { PACKAGE_VERSION } from '@/cloudscape/internals/components/environment';
// import AwsUiLink from '@cloudscape-design/components/link';
import JsonView from 'react18-json-view';
import "react18-json-view/src/style.css"


import pagesContext from '../pages-context';

interface TreeItem {
  name: string;
  href?: string;
  items: TreeItem[];
}

function createPagesTree(pages: string[]) {
  const tree: TreeItem = { name: '.', items: [] };
  function putInTree(segments: string[], node: TreeItem, item: string) {
    if (segments.length === 0) {
      node.href = item;
    } else {
      let match = node.items.filter(item => item.name === segments[0])[0];
      if (!match) {
        match = { name: segments[0], items: [] };
        node.items.push(match);
      }
      putInTree(segments.slice(1), match, item);
      node.items.sort((a, b) => Math.min(b.items.length, 1) - Math.min(a.items.length, 1));
    }
  }
  for (const page of pages) {
    const segments = page.split('/');
    putInTree(segments, tree, page);
  }
  return tree;
}

// function TreeItemView({ item }: { item: TreeItem }) {
//   return (
//     <li>
//       {item.href ? (
//         <AwsUiLink href={(item as any).href as any}>
//           {item.name}
//         </AwsUiLink>
//       ) : (
//         <b style={{ fontSize: '1.6rem' }}>{item.name}</b>
//       )}
//       <ul style={{ marginBlock: 0, marginInline: 0 }}>
//         {item.items.map(item => (
//           <TreeItemView key={item.name} item={item} />
//         ))}
//       </ul>
//     </li>
//   );
// }

export default function IndexPage() {
  const pages = (pagesContext as { keys: () => string[] }).keys().map((pagePath: string) => pagePath.replace(/^\.\//, '').replace(/\.page\.tsx$/, ''));


  console.log('---pages-------', pages);

  const tree = createPagesTree(pages);
  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <h1>Welcome!</h1>
      <p>Build info: {PACKAGE_VERSION}</p>
      <p>Select a page:</p>
      <JsonView src={tree} collapsed={1} />
      {/*<ul>*/}
      {/*  {tree.items.map(item => (*/}

      {/*    <TreeItemView key={item.name} item={item} />*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </div>
  );
}
