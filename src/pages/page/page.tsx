import React, { FC } from 'react';
import cn from 'classnames';

import { Footer, Header } from 'widgets';

import { PageProps } from './types';
import styles from './page.module.scss';

export const Page: FC<PageProps> = ({
  className,
  children,
  pageClassName,
  headerClassName,
  footerClassName,
  ...props
}) => {
  return (
    <div className={cn(styles.page, pageClassName)}>
      <Header className={headerClassName} />
      <main className={cn(styles.main, className)} {...props}>
        {children}
      </main>
      <Footer className={footerClassName} />
    </div>
  );
};
