import Link from "next/link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

type NavLinkProps = {
  item: any,
  inMenu?: boolean
}

const NavLink = ({ item, inMenu }: NavLinkProps) => {
  return (
    <Link href={item.href}
      className={classNames(
        item.current
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        inMenu
          ? 'block'
          : '',
        'px-3 py-2 rounded-md text-sm font-medium'
      )}
      aria-current={item.current ? 'page' : undefined}
    >
      {item.name}
    </Link>
  );
}

export default NavLink;