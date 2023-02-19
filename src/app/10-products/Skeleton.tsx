import cx from 'classnames';
import styles from './ProductCard.module.scss';

export default function Skeleton() {
  return (
    <div className="animate-pulse space-y-2 py-2">
      <div className="h-5 rounded bg-slate-200" />
      <div className="h-5 rounded bg-slate-200" />
      <div className={cx('rounded-lg bg-slate-300', styles.imageWrap)} />
    </div>
  );
}
