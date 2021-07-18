import React, { memo } from 'react';
import styles from './header.module.css';
import { Button } from 'elementz';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrutch } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const Header = memo(({ onLogout }) => {
  const history = useHistory();
  const goHome = () => {
    history.push('/maker');
  };
  const goCorona = () => {
    history.push('/corona');
  };
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>
          코로나 백신 카드 및 예방접종 센터 현황
          <FontAwesomeIcon icon={faCrutch} className={styles.logo} />
        </h1>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li} onClick={goHome}>
          환자 정보
        </li>
        <li className={styles.li} onClick={goCorona}>
          예방접종센터 조회
        </li>
      </ul>
      {onLogout && (
        <div className={styles.logout}>
          <Button
            secondary
            iconRight='shortcut'
            effect='icon-float'
            onClick={onLogout}
          >
            Logout
          </Button>
        </div>
      )}
    </header>
  );
});

export default Header;
