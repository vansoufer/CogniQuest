import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface InputButtonProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function InputButton({
  value,
  onChange,
  onSubmit,
  placeholder = 'Digite aqui...',
  disabled = false
}: InputButtonProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="relative flex w-full">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full h-auto min-h-[60px] max-h-[200px] p-4 pr-12 rounded-lg 
          bg-[#19242b] text-white placeholder-gray-300 
          resize-none overflow-auto custom-scrollbar
          focus:outline-none focus:ring-2 focus:ring-[#5f0dff]"
        style={{
          height: 'auto'
        }}
      />
      <button
        onClick={onSubmit}
        disabled={disabled || !value.trim()}
        className=" bottom-2 p-[10px] rounded-full text-xl
          text-white transition-all hover:scale-105 disabled:opacity-50"
      >
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
}
