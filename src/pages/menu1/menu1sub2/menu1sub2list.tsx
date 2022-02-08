import { PageContainer } from '@ant-design/pro-layout';
import { Link } from '@umijs/preset-dumi/lib/theme';

export default () => {
  return (
    <PageContainer>
      菜单分类一功能二列表
      <Link to={'/menu1/sub2/detail'}>详情二</Link>
    </PageContainer>
  );
};
