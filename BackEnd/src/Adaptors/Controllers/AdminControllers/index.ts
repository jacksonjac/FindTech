import Userlistcontroller from './Userlistcontroller';
import loginAdminCtrl from './loginAdminCtrl';
import blockUsercontroller from './blockUsercontroller';
import UnblockUsercontroller from './UnblockUsercontroller';

export default (dependencies: any) => {
  return {
    loginAdminCtrl: loginAdminCtrl(dependencies),
    Userlistcontroller: Userlistcontroller(dependencies),
    blockUsercontroller: blockUsercontroller(dependencies),
    UnblockUsercontroller:UnblockUsercontroller(dependencies)
    // Add other controllers here if needed, separated by commas
  };
};