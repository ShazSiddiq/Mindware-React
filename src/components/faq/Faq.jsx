import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'
import LayoutWraper from '@/src/layout/LayoutWraper'
const Faq = () => {
  return (
    <div className=' bg-blue-100 '>
      <LayoutWraper >
        <div className="flex flex-col items-center py-5">
        <h1 className='text-md p-2 '>FAQ's</h1>
        <p className='text-3xl font-medium'>Any questions?</p>
        <Tabs 
    className="mt-5 w-full"
    
     defaultValue={"adip"}
    >
      <TabsList className="w-full bg-transparent">
          <TabsTrigger value="adip"  className="text-xl">Services</TabsTrigger>
          <TabsTrigger value="udid-card" className="text-xl">Contact</TabsTrigger>   
          
      </TabsList>
      <TabsContent value="adip" className="px-10">
      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="text-slate-600" >
        <AccordionTrigger className="text-[20px] text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </AccordionTrigger>
        <AccordionContent className="text-[20px] text-start">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
        </AccordionContent>
      </AccordionItem >
      <AccordionItem value="item-2" className="py-5 text-slate-600">
        <AccordionTrigger className="text-[20px] text-start">Who Lorem Ipsum is not simply random text.</AccordionTrigger>
        <AccordionContent className="text-[20px] text-start">
       Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney <br/>

        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="py-5 text-slate-600">
        <AccordionTrigger className="text-[20px] text-start">Lorem Ipsum is not simply random text.</AccordionTrigger>
        <AccordionContent className="text-[20px] text-start">
        Contrary to popular belief, <br/>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,<br/> making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </TabsContent>
      
      <TabsContent value="udid-card" className="px-10">
      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="py-5 text-slate-600" >
        <AccordionTrigger className="text-[20px] text-start">Lorem Ipsum is not simply random text.</AccordionTrigger>
        <AccordionContent className="text-[20px] text-start">
        Lorem Ipsum is not simply random text.Lorem Ipsum is not simply random text.Lorem Ipsum is not simply random text.Lorem Ipsum is not simply random text.
        </AccordionContent>
      </AccordionItem >
      <AccordionItem value="item-2" className="py-5 text-slate-600">
        <AccordionTrigger className="text-[20px] text-start">Who Lorem Ipsum is not simply random text.</AccordionTrigger>
        <AccordionContent className="text-[20px] text-start">
        Any Lorem Ipsum is not simply random text.Lorem Ipsum is not simply random text.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="py-5 text-slate-600">
        <AccordionTrigger className="text-[20px] text-start">Lorem Ipsum is not simply random text.</AccordionTrigger>
        <AccordionContent className="text-[20px] text-start">
        Lorem Ipsum is not simply random text.Lorem Ipsum is not simply random text.Lorem Ipsum is not simply random text.Proof.
        </AccordionContent>
      </AccordionItem>
    </Accordion></TabsContent>
    
    </Tabs>
<div className='p-6'>
    <Button className="border w-44 text-[16px] p-3 border-orange-500 text-white bg-orange-500 hover:bg-orange-600 rounded-3xl">View All FAQ</Button>
    </div>
    </div>
    </LayoutWraper>
    </div>
  )
}

export default Faq
