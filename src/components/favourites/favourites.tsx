import styles from './favourites.module.scss';
import classNames from 'classnames';

export interface FavouritesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favouritess-and-templates
 */
export const Favourites = ({ className }: FavouritesProps) => {
    return <div className={classNames(styles.root, className)}>Favourites</div>;
};
