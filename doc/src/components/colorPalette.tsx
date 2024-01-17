import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styles from './PaletteColor.module.css';

interface PaletteColorProps {
  colorName: string;
  colorValue: string;
  border?: string;
}

const PaletteColor: React.FC<PaletteColorProps> = ({
  colorName,
  colorValue,
  border = 'solid',
}) => {
  const notify = () => toast.success('Copied to Clipboard!');

  return (
    <div id="colorbutton" style={{ cursor: 'pointer' }} onClick={() => { navigator.clipboard.writeText(colorValue); notify(); }} className={styles.container}>

      <div
        className={styles.swatch}
        style={{ backgroundColor: colorValue, border, borderWidth: 1 }}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p className={styles.colorName}>{colorName}</p>
        <p className={styles.colorValue}>{colorValue}</p>
      </div>
    </div>
  );
};

export default PaletteColor;
