import { Head } from '@inertiajs/react';

import AppearanceTabs from '@/components/appearance-tabs';
import HeadingSmall from '@/components/heading-small';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Butthole } from '@/components/custom/butthole';

import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Department settings',
        href: '/department',
    },
];

export default function Departments() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Department" />
            <div className="ml-4 mt-4 flex items-center justify-between">
                <Button variant='secondary'>New Department</Button> 
            </div>
            
        </AppLayout>
    );
}
