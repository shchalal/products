type IconName = 'view_list' | 'view_module';

interface IconSwitchProps {
  icon: IconName;
  onSwitch: () => void;
}

export default function IconSwitch({ icon, onSwitch }: IconSwitchProps) {
  return (
    <button
      className="icon-switch"
      onClick={onSwitch}
      aria-label="Переключить вид"
      type="button"
    >
      <span className="material-icons">{icon}</span>
    </button>
  );
}
