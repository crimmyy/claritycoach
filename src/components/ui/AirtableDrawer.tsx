'use client'

import React from 'react'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

interface AirtableDrawerProps {
  trigger?: React.ReactNode
}

const AirtableDrawer: React.FC<AirtableDrawerProps> = ({ trigger }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {trigger || (
          <button className="bg-primary text-white px-4 py-2 rounded-md">Sign Up</button>
        )}
      </DrawerTrigger>

      <DrawerContent className="bg-[#EBF5FE]">
        <div className="mx-auto h-2 w-[100px] rounded-full bg-[#389DF9]" />

        <div className="mx-auto w-full max-w-2xl px-4">
          <DrawerHeader>
            <DrawerTitle className="text-[#002370] text-lg">
              Sign Up for ClarityCoach
            </DrawerTitle>
            <DrawerDescription className="text-sm text-muted-foreground">
              Fill out the form to join our early access list.
            </DrawerDescription>
          </DrawerHeader>

          <div className="p-4">
            <div className="w-full rounded-[16px] overflow-hidden bg-[#EBF5FE]">
              <iframe
                className="w-full min-h-[60vh] md:min-h-[70vh]"
                src="https://airtable.com/embed/app5njLO852rBMkWj/pagr30Zr2DdZu8kXA/form"
                frameBorder="0"
                title="Airtable Form"
                style={{ background: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default AirtableDrawer
