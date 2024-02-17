import CreateNewGroupModal from "./entities/CreateNewGroupModal";
import KeyboardShortcutsModal from "./entities/KeyboardShortcutsModal";
import ThemeModal from "./entities/ThemeModal";

const GlobalModal: React.FC = () => {
  return (
    <>
      <ThemeModal />
      <KeyboardShortcutsModal />
      <CreateNewGroupModal />
    </>
  );
};

export default GlobalModal;
