import { ProCard } from '@ant-design/pro-components';
// import AppBoard from "@/cloudscape/board/app";
// import AppComponentsDemo from "@/cloudscape/components/app";
import RootCloudScape from "@/cloudscape";

function App() {
  return (
    <>
      <ProCard
        direction={'row'}
        gutter={[16, 16]}
        title={<b>Demos</b>}
        bordered
        headerBordered
      >
        <RootCloudScape />
        {/*<AppComponentsDemo />*/}

      </ProCard>
    </>
  );
}

export default App
