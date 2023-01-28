import React, { useMemo } from 'react';
import clsx from "clsx";
import styles from "@site/src/pages/index.module.css";
import BrowserOnly from '@docusaurus/BrowserOnly';

const govRecordText = '沪ICP备2021035418号';

const LicenseFooter = () => {


  const hrefEl = useMemo(() => {
    return (
      <div className={clsx("footer", "footer--dark", styles.footerBeian)}>
        {`Copyright© ${new Date().getFullYear()} | `}
        <a className={styles.footerBeianLink} href="https://beian.miit.gov.cn/" target="_blank">{govRecordText}</a>
      </div>
    )
  }, [govRecordText]);


  return (
    <BrowserOnly fallback={hrefEl}>
      {
        () => hrefEl
      }
    </BrowserOnly>
  );
};

export default LicenseFooter;