/* import packages */
import React from 'react';
import { Props } from 'framer-motion/types/types';
import Link from 'next/link';

/* import constant */
import { cms } from '../../cms/constant';

const Header: React.FC<Props> = (props): JSX.Element => {
  const { dangerousAsPath: pathname = "" } = props;
  return (
    <header className="header">
      <div className="container d-flex align-center">
        <h3 className="brand-title">{cms.brandName}</h3>
        <ul className="nav-bar">
          <li>
            <Link href="/coffee">
              <a className={`${pathname.includes("coffee") ? "active" : ""}`}>
                {cms.tab.coffee}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/tea">
              <a className={`${pathname.includes("tea") ? "active" : ""}`}>
                {cms.tab.tea}
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
