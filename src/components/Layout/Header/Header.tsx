import { Title } from '@/components/ui/Title/Title';
import { Link } from 'react-router-dom';
import { HeaderMiddleSection } from './HeaderMiddleSection/HeaderMiddleSection';
import { HeaderRightSection } from './HeaderRightSection/HeaderRightSection';

export function Header() {
  return (
    <header className="sticky top-0pxr z-50 h-72pxr bg-white w-full border-b border-gray-200">
      <div className="mx-auto max-w-page flex h-full items-center justify-between px-20pxr">
        <Link to="/">
          <Title className="text-2xl font-bold">바로세움</Title>
        </Link>
        <div className="flex flex-row items-center gap-20pxr ">
          <HeaderMiddleSection />
          <HeaderRightSection isMobile={false} />
        </div>
        {/* {!isHiddenHeaderSection && (
          <>
            <HeaderMiddleSection />
            <HeaderRightSection />
          </>
        )} */}
      </div>
    </header>
  );
}
