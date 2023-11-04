import Link from 'next/link';

const TailwindLink = ({ href, target, children, className }) => {
return(
<Link href={href} target={target}>
<span className={className}>{ children}</ span>
</ Link>
);
};
export default TailwindLink;