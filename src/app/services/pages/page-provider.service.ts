import {Injectable} from '@angular/core';
import {PageInfo} from '../../modules/cathegory-info.module';

@Injectable({
    providedIn: 'root'
})
export class PageProviderService {
    private mainPages: PageInfo[] = [
        {
            link: 'skills',
            title: 'Skills',
            pages: [
                {
                    link: 'dev',
                    title: 'Development',
                    pages: [
                        {
                            link: 'basic',
                            title: 'Notion',
                            pages: [
                                {
                                    link: '#',
                                    title: 'C',
                                    pages: null
                                },
                                {
                                    link: '#',
                                    title: 'C++',
                                    pages: null
                                }, {
                                    link: '#',
                                    title: 'JavaScript',
                                    pages: null
                                }, {
                                    link: '#',
                                    title: 'HTML',
                                    pages: null
                                }, {
                                    link: '#',
                                    title: 'CSS',
                                    pages: null
                                }, {
                                    link: '#',
                                    title: 'SQL',
                                    pages: null
                                }, {
                                    link: '#',
                                    title: 'MySQL',
                                    pages: null
                                }, {
                                    link: '#',
                                    title: 'Hibernate',
                                    pages: null
                                }, {
                                    link: '#',
                                    title: 'PowerShell',
                                    pages: null
                                }, {
                                    link: '#',
                                    title: 'Bash',
                                    pages: null
                                }, {
                                    link: '#',
                                    title: 'Terminal',
                                    pages: null
                                }]
                        }, {
                            link: 'experienced',
                            title: 'Experienced',
                            pages: [
                                {
                                    link: '#',
                                    title: 'Java',
                                    pages: null
                                }, {
                                    link: '#',
                                    title: 'PHP',
                                    pages: null
                                }]
                        }, {
                            link: 'software',
                            title: 'Software',
                            pages: [{
                                link: '#',
                                title: 'IntelliJ',
                                pages: null
                            }, {
                                link: '#',
                                title: 'Eclipse',
                                pages: null
                            }, {
                                link: '#',
                                title: 'Visual Studio',
                                pages: null
                            }, {
                                link: '#',
                                title: 'WebStorm',
                                pages: null
                            }, {
                                link: '#',
                                title: 'SQL Developer',
                                pages: null
                            }]
                        }]
                }, {
                    link: 'network',
                    title: 'Network',
                    pages: [
                        {
                            link: 'network-basic',
                            title: 'Notion',
                            pages: [
                                {
                                    link: '#',
                                    title: 'FireWall',
                                    pages: null
                                }, {
                                    link: '#',
                                    title: 'DNS',
                                    pages: null
                                }, {
                                    link: '#',
                                    title: 'DHCP',
                                    pages: null
                                }, {
                                    link: '#',
                                    title: 'SSH',
                                    pages: null
                                }, {
                                    link: '#',
                                    title: 'DSH',
                                    pages: null
                                }, {
                                    link: '#',
                                    title: 'NFS',
                                    pages: null
                                }, {
                                    link: '#',
                                    title: 'SSHFS',
                                    pages: null
                                }, {
                                    link: '#',
                                    title: 'Port Knoking',
                                    pages: null
                                }]
                        }, {
                            link: 'network-software',
                            title: 'Software',
                            pages: [{
                                link: '#',
                                title: 'WireShark',
                                pages: null
                            }, {
                                link: '#',
                                title: 'Marrionnet',
                                pages: null
                            }]
                        }]
                }, {
                    link: 'frameworks',
                    title: 'Frameworks',
                    pages: [
                        {
                            link: '#',
                            title: 'Bootstrap',
                            pages: null
                        }, {
                            link: '#',
                            title: 'GWT',
                            pages: null
                        }, {
                            link: '#',
                            title: 'Spring',
                            pages: null
                        }, {
                            link: '#',
                            title: 'IONIC',
                            pages: null
                        }, {
                            link: '#',
                            title: 'Angular',
                            pages: null
                        }]
                }, {
                    link: 'live-languages',
                    title: 'Live Languages',
                    pages: [
                        {
                            link: 'beginner',
                            title: 'Beginner',
                            pages: [{
                                link: '#',
                                title: 'Japanese',
                                pages: null
                            }]
                        }, {
                            link: 'advanced',
                            title: 'Advanced',
                            pages: [{
                                link: '#',
                                title: 'English',
                                pages: null
                            }, {
                                link: '#',
                                title: 'French',
                                pages: null
                            }, {
                                link: '#',
                                title: 'Russian',
                                pages: null
                            }, {
                                link: '#',
                                title: 'Ukrainian',
                                pages: null
                            }]
                        }]
                }]
        },
        {
            link: 'studies',
            title: 'Studies',
            pages: [
                {
                    link: 'iut-orsay',
                    title: 'University IUT d\'Orsay',
                    pages: null
                },
                {
                    link: 'maurice-genevoix',
                    title: 'High-school Maurice Genevoix',
                    pages: null
                }]
        },
        {
            link: 'projects',
            title: 'Projects',
            pages: [
                {
                    link: 'mobile-dev',
                    title: 'Mobile Applications',
                    pages: [
                        {
                            link: 'ionic-dev',
                            title: 'IONIC & Angular App',
                            pages: null
                        },
                        {
                            link: 'native-android',
                            title: 'Native Android App',
                            pages: null
                        }]
                },
                {
                    link: 'websites',
                    title: 'Websites',
                    pages: [{
                        title: 'Bearico.com',
                        link: '#',
                        pages: null
                    }]
                }]
        },
        {
            link: 'personal-info',
            title: 'Personal Info',
            pages: null
        },
        {
            link: 'personal-interests',
            title: 'Personal Interests',
            pages: [
                {
                    link: 'technology',
                    title: 'Technology',
                    pages: null
                }, {
                    link: 'entrepreneurship',
                    title: 'Entrepreneurship',
                    pages: null
                }, {
                    link: 'light-novels',
                    title: 'Light-Novels',
                    pages: null
                }, {
                    link: 'anime',
                    title: 'Anime',
                    pages: null
                }]
        },
        {
            link: 'professional-experience',
            title: 'Professional Experience',
            pages: [{
                link: 'my-work',
                title: 'My work',
                pages: [{
                    link: 'my-work-about',
                    title: 'About',
                    pages: null
                }, {
                    link: 'my-work-role',
                    title: 'Role',
                    pages: null
                }, {
                    link: 'my-work-tasks',
                    title: 'Tasks',
                    pages: null
                }]
            }]
        }
    ];

    constructor() {
    }

    public getMainPages() {
        return this.mainPages;
    }

    public getStudiesInfo() {
        return this.getMainPages()[1];
    }

    public getProjInfo() {
        return this.getMainPages()[2];
    }

    public getMobileInfo() {
        return this.getProjInfo().pages[0];
    }

    public getWebsitesInfo() {
        return this.getProjInfo().pages[1];
    }

    public getPersInfo() {
        return this.getMainPages()[3];
    }

    public getPersIntInfo() {
        return this.getMainPages()[4];
    }

    public getProfInfo() {
        return this.getMainPages()[5];
    }

    public getMyWorkInfo() {
        return this.getProfInfo().pages[0];
    }

    public getSkillsInfo() {
        return this.mainPages[0];
    }

    public getDevInfo() {
        return this.getSkillsInfo().pages[0];
    }

    public getDevBasicInfo() {
        return this.getDevInfo().pages[0];
    }

    public getDevExpInfo() {
        return this.getDevInfo().pages[1];
    }

    public getDebSoftwareInfo() {
        return this.getDevInfo().pages[2];
    }

    public getNetInfo() {
        return this.getSkillsInfo().pages[1];
    }

    public getNetBasicInfo() {
        return this.getNetInfo().pages[0];
    }

    public getNetSoftWareInfo() {
        return this.getNetInfo().pages[1];
    }

    public getFrameworkInfo() {
        return this.getSkillsInfo().pages[2];
    }

    public getLangInfo() {
        return this.getSkillsInfo().pages[3];
    }

    public getLangBeginner() {
        return this.getLangInfo().pages[0];
    }

    public getLangAdvanced() {
        return this.getLangInfo().pages[1];
    }

}
