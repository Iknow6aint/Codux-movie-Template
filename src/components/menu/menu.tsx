import styles from './menu.module.scss';
import classNames from 'classnames';

export interface MenuProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img
                    src="https://app.logo.com/view/logo_20d72b1a-686f-41aa-9ebf-1a278346fcce"
                    className={styles.logoImg}
                />
                <span className={styles.logoText}>iknow movies</span>
            </div>
            <span className={styles.title}>Sort By</span>
            <hr className={styles.hr} />
        </div>
    );
};
