"use client";
import React, { useEffect, useState } from "react";
import DateCarousel from "../../components/Date";
import PercentageCircle from "../../components/commons/PercentageCircle";
import Image from "next/image";
import avatar3 from "../../assets/avatar3.jpeg";
import Link from "next/link";
import axios from "axios";
import { formatDate } from "@/app/utils/formatDate";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate } from "../../state/dateSlice";
import { RootState } from "@/app/state/store";

const page = () => {
  const dispatch = useDispatch();
  const [selectDate, setSelectDate] = useState(new Date());
  const [quantityPackages, setQuantityPackages] = useState(Number);
  const [packagesDelivered, setPackagesDelivered] = useState(Number);

  const [quantityActives, setQuantityActives] = useState(Number);
  const [totalDeliveries, setTotalDeliveries] = useState(Number);
  // eslint-disable-next-line
  const [imageUser, setImageUser] = useState<any[]>([]);
  const maxImages = 2;
  const usersToShow = imageUser.slice(0, maxImages);
  const imageUsersCount = imageUser.length - maxImages;
  console.log(imageUsersCount);

  const date: Date = useSelector((state: RootState) => state.date.selectedDate);
  const objDate = new Date(date);
  const nombreMes = objDate.toLocaleString("es-ES", { month: "long" });
  const monthWithCapitalLetter =
    nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1);

  const formattedDate = formatDate(selectDate);
  useEffect(() => {
    const packagesFetch = async () => {
      const response = await axios.get(
        `http://localhost:4000/api/v1/backoffice/packagesPerDay/${formattedDate}`
      );
      const packagesData = response.data;
      const quantityPackagesDelivered = packagesData.allPackagesPerDay.length;
      const delivered = packagesData.allPackagesPerDay.filter(
        // eslint-disable-next-line
        (packages: any) => packages.delivered
      );
      const quantityDelivered = delivered.length;

      setPackagesDelivered(quantityDelivered);
      setQuantityPackages(quantityPackagesDelivered);
    };

    const userFetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/backoffice/getAllDeliveryManByDate/${formattedDate}`
        );
        const userActive = response.data;
        const actives = userActive.deliveryMen.filter(
          // eslint-disable-next-line
          (active: any) => active.deliveries
        );

        const quantityActive = actives.length;

        setQuantityActives(quantityActive);
      } catch (error) {
        console.error("error:", error);
      }
    };
    const totalUsersFetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/backoffice/dealers?delivery_date=${formattedDate}`
        );
        setImageUser(response.data.dealersInfo);

        const total = response.data.dealersInfo.length;
        setTotalDeliveries(total);
      } catch (error) {
        console.error(error);
      }
    };
    totalUsersFetch();
    userFetch();
    packagesFetch();
    dispatch(setSelectedDate(formattedDate));
  }, [selectDate]);

  const handleDateChange = (newDate: Date) => {
    setSelectDate(newDate);
  };

  const PercentageRepartidoresValue = () => {
    return (quantityActives / totalDeliveries) * 100;
  };
  const PercentajePaquetesValue = () => {
    return (packagesDelivered / quantityPackages) * 100;
  };

  return (
    <div className=" rounded-2xl  text-[#3D1DF3] bg-[#C7FFB1] mr-6  ml-6 mt-4 font-poppins">
      <div className="flex justify-center items-center  h-16">
        <h1 className="m-5 font-bold text-lg ">Gestionar Pedidos</h1>
      </div>
      <div className="rounded-2xl mb-5 pb-6 bg-white  ">
        <div className="flex items-center">
          <div className="w-16 h-16 ml-5 mt-4 rounded-full bg-blue-500 flex items-center justify-center">
            <Image
              src={avatar3}
              className="rounded-full w-16 h-16 "
              alt="avatar3"
            ></Image>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold">¡Hola Admin!</h3>
            <h5 className=" text-base">Estos son los pedidos del día</h5>
          </div>
        </div>
        <div className="border-[1px] border-[#3D1DF3] rounded-xl mx-5 my-3 py-2">
          <div>
            <h4 className="dotted-border text-[#3D1DF3] font-semibold ml-2 mb-1">
              {monthWithCapitalLetter}
            </h4>
          </div>
          <DateCarousel
            selectedDate={selectDate}
            onDateChange={handleDateChange}
          />
        </div>
        <div className="p-3  rounded-xl  border-[#3D1DF3] border-[1px] ml-5 mr-5 ">
          <div className="dotted-border flex justify-between  ">
            <h4 className="font-bold">Detalles</h4>
            <div className="flex items-center">
              <h4 className="mr-2">{selectDate.toLocaleDateString("es-ES")}</h4>
              <svg
                className="items-center"
                width="11"
                height="9"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.26799 6.07909C4.86821 6.55848 4.13179 6.55848 3.73201 6.0791L0.238902 1.89046C-0.304217 1.2392 0.158881 0.249999 1.00689 0.249999L7.99311 0.25C8.84112 0.25 9.30422 1.2392 8.7611 1.89046L5.26799 6.07909Z"
                  fill="#3D1DF3"
                />
              </svg>
            </div>
          </div>
          <div className="dotted-border">
            <div className="relative flex justify-start mb-3 mt-3">
              <PercentageCircle
                value={PercentageRepartidoresValue()}
                aria-label="Porcentaje de repartidores activos"
              />
              <div className="ml-5 ">
                <h4 className="font-bold text-base">Repartidores</h4>
                <h6 className="text-sm">
                  {quantityActives}/{totalDeliveries} Habilitados
                </h6>
                <div className="flex justify-content mt-1 mb-4 ">
                  <div className="flex">
                    {usersToShow.map((user, index) => (
                      <Image
                        key={index}
                        src={user.image}
                        alt={`User ${index}`}
                        className="rounded-full w-6 h-6"
                      />
                    ))}
                    {imageUsersCount > 0 && (
                      <div className="rounded-full w-8 h-8 bg-blue-500 text-white flex items-center justify-center">
                        +{imageUsersCount}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-end pb-3 ml-6">
                <Link href="/backoffice/manage_delivery">
                  <button className="bg-[#00EA77]  rounded-2xl w-16 h-9 ">
                    Ver
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative flex  justify-start  mt-3 ">
            <PercentageCircle value={PercentajePaquetesValue()} />
            <div className="ml-5">
              <h4 className="font-bold text-base">Paquetes</h4>
              <h6 className="text-sm">
                {packagesDelivered}/{quantityPackages} Repartidos
              </h6>
            </div>
            <div className="flex items-end align-bottom pb-3 pt-10 ml-6">
              <Link href="/backoffice/package_history">
                <button className="bg-[#00EA77] rounded-2xl w-16 h-9 mb-1">
                  Ver
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="ml-5 mr-5 mt-5">
          <Link href="/backoffice/add_packages">
            <button className="bg-[#00EA77] text-[#3D1DF3] rounded-2xl w-[100%] h-10 mb-1">
              Nuevo paquete +
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
