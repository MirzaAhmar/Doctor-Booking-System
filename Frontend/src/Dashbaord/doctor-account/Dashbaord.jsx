import React, { useState } from 'react'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import useGetProfile from "../../hooks/useFetchData"
import { BASE_URL } from '../../../config'
import Tabs from './Tabs'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Dashbaord = () => {
  const { data, loading, error } = useGetProfile(`${BASE_URL}/doctors/profile/me`);
  const [tab, setTab] = useState('overview'); // Changed settab to setTab

  return (
    <section id='doctorDashbaord'>
      <div className="container">
        <div>
          {loading && !error && <Loading />}
          {error && !loading && <Error />}
          {
            !loading && !error && (
              <div className="row gap-4">
                <div className="col-md-3">
                  <Tabs tab={tab} setTab={setTab} /> {/* Pass setTab instead of settab */}
                </div>
                <div className="col-md-7">
                  {data.isApproved == "pending" && <div className='pendingText'>
                    <FontAwesomeIcon icon={faCircleExclamation} />
                    <p>To get approval please complete your profile. We&apos;ll review manually and approve within 3 days.</p>
                  </div>}

                  <div className='mt-5'>
                    {tab == "overview" &&
                    <div className='overview'>
                    <div className='d-flex align-items-center gap-3'>
                      <figure><img src={data?.photo} alt="drProfile" /></figure>
                      <div>
                        <h4>Surgeon</h4>
                        <h3>Talha Aslam</h3>
                        <div class="d-flex align-items-center gap-1"><img src="/src/assets/images/Star.png" alt="starImg" /><h6>4.8</h6><h6>(272)</h6></div>
                      </div>
                      </div>
                    </div>
                    }


                    {tab == "appointments" && <div>appointments</div>}
                    {tab == "settings" && <div>settings</div>}
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Dashbaord;
