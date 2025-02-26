"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  PopoverGroup,
} from "@headlessui/react";
import {
  Bars3Icon,
  // MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useStorage } from "@/hooks/useLocalStorage";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { usePathname, useRouter } from "next/navigation";
import { UserLogin } from "@/lib/users";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { getMyInfo } from "@/api/usersApi";

const navigation = {
  categories: [
    {
      name: "About us",
      href: "#",
      description:
        "Learn more about our company values and mission to empower others",
    },
    {
      name: "Careers",
      href: "#",
      description:
        "Looking for you next career opportunity? See all of our open positions",
    },
    {
      name: "Support",
      href: "#",
      description:
        "Get in touch with our dedicated support team or reach out on our community forums",
    },
    {
      name: "Blog",
      href: "#",
      description:
        "Read our latest announcements and get perspectives from our team",
    },
  ],
  pages: [
    { name: "Trang chủ", href: "/" },
    { name: "Thông tin cơ sở ", href: "/ " },
    { name: "Cẩm nang tiêm chủng  ", href: "/ " },
    { name: "Dịch vụ  ", href: "/vaccine" },
    { name: "Bảng giá ", href: "/ " },
  ],
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [user, setUser] = useState<UserLogin>();
  const [token, setToken, loadToken] = useStorage<string | null>("token", null);

  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    loadToken();
  }, [pathname]);

  useEffect(() => {
    if (token) {
      getMyInfo().then((res) => {
        setUser(res.result);
        console.log(res);
      });
    }
  }, [token]);


  return (
    <div className="bg-white">
      <div>
        {/* Mobile menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <div className="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link
                      href={page.href}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
              {user?.access ? (
                <div className=" flex items-center"></div>
              ) : (
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <Link
                      href="/login"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      href="/create-account"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Create account
                    </Link>
                  </div>
                </div>
              )}
            </DialogPanel>
          </div>
        </Dialog>

        <header className="relative bg-white">
          <nav aria-label="Top" className="mx-auto  px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  width={100}
                  height={100}
                  alt="ss"
                  src="https://vnvc.vn/wp-content/uploads/2024/05/vnvc-logo.png"
                  className="h-8 w-auto"
                />
              </Link>

              <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-4">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-primary"
                  >
                    <MapPin className="h-4 w-4" />
                    <span>TÌM TRUNG TÂM VNVC</span>
                  </Link>
                  <Link
                    href="vaccine"
                    className="flex items-center gap-2 text-primary"
                  >
                    <ShoppingBagIcon className="h-4 w-4" />

                    <span>Đặt mua vắc xin</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-primary"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>ĐĂNG KÝ TIÊM</span>
                  </Link>
                </div>
                <div className="text-right">
                  <div className="text-orange-500 font-bold">
                    Hotline: 028 7102 6595
                  </div>
                  <div className="text-xs text-gray-600">
                    Mở cửa 7h30 - 17h00 / T2 - CN xuyên trưa*
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <a href="#">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt=""
                      src="https://twui.tkgiare.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                      className="h-8 w-auto"
                    />
                  </a>
                </div>

                {/* Flyout menus */}
                <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    {navigation.pages.map((page) => (
                      <Link
                        key={page.name}
                        href={page.href}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                </PopoverGroup>

                {user?.username ? (
                  <div className="ml-auto gap-4 flex items-center">
                    <div className="ml-4 flow-root lg:ml-6">
                      <Link
                        href="/cart"
                        className="group -m-2 flex items-center p-2"
                      >
                        <ShoppingBagIcon
                          aria-hidden="true"
                          className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                        />

                        <span className="sr-only">items in cart, view bag</span>
                      </Link>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent>
                        <DropdownMenuLabel>{user?.username}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {/* <DropdownMenuItem
                          onClick={() => {
                            router.push("/my-order");
                          }}
                        >
                          Order
                        </DropdownMenuItem> */}
                        <DropdownMenuItem
                          onClick={() => {
                            router.push("/children-profile");
                          }}
                        >
                          Hồ sơ trẻ em
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            router.push("/reaction-after-injection");
                          }}
                        >
                          Phản ứng sau tiêm
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            router.push("/my-order");
                          }}
                        >
                          Lịch tiêm chủng
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            router.push("/vaccination-schedule");
                          }}
                        >
                          Lịch sử tiêm chủng
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            setToken(null);
                            router.push("/login");
                          }}
                        >
                          Đăng xuất
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ) : (
                  <div className="ml-auto flex items-center">
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                      <Link
                        href="/login"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Sign in
                      </Link>
                      <span
                        aria-hidden="true"
                        className="h-6 w-px bg-gray-200"
                      />
                      <Link
                        href="/create-account"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Create account
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </header>
      </div>

      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="relative -mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
