import UnauthorizedRoutes from './UnauthorizedRoutes';

const MainRouter: React.FC = () => {
  //const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return <UnauthorizedRoutes />;
};

export default MainRouter;
