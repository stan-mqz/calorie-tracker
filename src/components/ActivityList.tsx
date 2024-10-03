import { useMemo } from "react";
import { Activity } from "../types/types";
import { cathegories } from "../data/categories";
import { PencilSquareIcon } from '@heroicons/react/24/outline'

type ActivityListProps = {
  activities: Activity[];
};

export default function ({ activities }: ActivityListProps) {

  const cathegoryName = useMemo(() => 
    (cathegory: Activity['cathegory']) =>  cathegories.map(cat => cat.id === cathegory ? cat.name : ''), 
    [activities])


  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>

      {activities.map((activity) => (
        <div
          key={activity.id}
          className="px-5 py-10 bg-white mt-5 flex justify-between"
        >
          <div className="space-y-2 relative">
            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.cathegory === 1 ? 'bg-lime-500' : 'bg-orange-500' }`}>
                {cathegoryName(+activity.cathegory)}
            </p>

            <p className="text-2xl font-bold pt-5">
                {activity.name}
            </p>

            <p className="font-black text-4xl text-lime-500">
                {activity.calories} {''}
                <span>Calorias</span>
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <button>
              <PencilSquareIcon 
              className="h-8 w-8 text-gray-800"
              
              />
            </button>
          </div>

        </div>
      ))}
    </>
  );
}
