import { useCallback, useState } from "react";
import {Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn,
Specifics } from "../../components";
import useFetch from "../../hook/useFetch";
import { COLOR, icons, SIZES } from "../../constants";
import { ActivityIndicator, RefreshControl, SafeAreaView,ScrollView,Text, View } from "react-native";
import { COLORS } from "../../constants";
import { useSearchParams,useRouter,Stack } from "expo-router";


const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = ({ navigation, route }) => {
    const params = useSearchParams();
    const router = useRouter();


    const {data, isLoading, error, refetch} = useFetch('job-details', {
        job_id: params.id});

        const [refreshing, setRefreshing] = useState(false);
        const [activeTab, setActiveTab] = useState(tabs[0]);

        onRefresh = ()=>{}

        const displayTabContent = () =>{
            switch(activeTab){
                case "Qualifications":
                    return <Specifics 
                    title = "Qualifications"
                    points = {data[0].job_highlights?.Qualifications ?? ['N/A']} 
                    />;
                    break;
                case "About":
                    break;
                case "Responsibilities":
                    break;
            }
        }
    

       // console.log('data', data);
    return (
       <SafeAreaView style={{felx: 1, backgroundClor: COLORS.lightWhite}}>
        <Text>Job Details for </Text>
        <Stack.Screen
            options = {{
                headerStyle: { backgroundColor: COLORS.lightWhite,
                headerShadowVisible : false,
                headerBackVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.left}
                        dimension="60%"
                        handelPress={()=> router.back()}
                    />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.share}
                        dimension="60%"
                        handelPress={()=> alert('share')}
                    />
                ),
                headerTitle: '',
            }
            }}
        /> 
        <>
            <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={ 
                    <RefreshControl 
                        refreshing={refreshing} 
                        onRefresh={onRefresh}
                        />
                    }
                >
                    {
                        isLoading ? (
                            <ActivityIndicator size="large" color={COLORS.primary} />
                        ): error ? (
                            <Text>{error}</Text>
                        ): data.length === 0 ? (
                            <Text>There is no data</Text>
                        ): (
                            <View style={{padding: SIZES.medium, paddingBottom: 100}}>
                                <Company 
                                    companyLogo={data[0].employer_logo}
                                    companyName={data[0].employer_name}
                                    jobTitle={data[0].job_title}
                                    companyLocation={data[0].location} 
                                />
                                <JobTabs
                                    tabs={tabs}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                
                                />
                                {displayTabContent()}
                            </View>
                        )
                    }
                
            </ScrollView>
        </>
       </SafeAreaView>
    )
}

export default JobDetails;