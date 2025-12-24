import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getTreeSource } from '../treeConfig';

function Home() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  
  // Lấy source từ URL query parameter
  const sourceParam = searchParams.get('source');
  const sourceIndex = sourceParam ? parseInt(sourceParam, 10) : 0;
  const currentSource = getTreeSource(sourceIndex);

  const handleTreeClick = () => {
    // Hiển thị modal hướng dẫn
    setShowModal(true);
  };

  const handleOk = () => {
    // Đóng modal và chuyển sang christmas-tree với cùng source parameter
    setShowModal(false);
    navigate(`/christmas-tree?source=${sourceIndex}`);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{
      textAlign: 'center',
      padding: '20px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{
        fontSize: '3rem',
        marginBottom: '40px',
        textShadow: '2px 2px 10px rgba(255, 255, 255, 0.3)',
        animation: 'twinkle 2s infinite'
      }}>
        Merry Christmas! 🎄
      </h1>
      {/* Hiển thị tên người nhận nếu có */}
      {currentSource.name && (
        <p style={{
          fontSize: '1.5rem',
          color: '#FFD700',
          marginTop: '-20px',
          marginBottom: '20px',
          textShadow: '1px 1px 5px rgba(255, 215, 0, 0.5)'
        }}>
          🎁 A special gift for <strong>{currentSource.name}</strong>
        </p>
      )}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
      <div style={{ cursor: 'pointer', display: 'inline-block' }} onClick={handleTreeClick} title={`Đi đến cây thông Noel 3D - ${currentSource.name}`}> 
        <div style={{ position: 'relative', display: 'inline-block', margin: '20px auto' }}>
          <div style={{ fontSize: '3rem', position: 'relative', zIndex: 10, animation: 'rotate 3s linear infinite' }}>⭐</div>
          <div style={{ 
            width: 0, 
            height: 0, 
            borderLeft: '60px solid transparent', 
            borderRight: '60px solid transparent',
            borderBottom: '80px solid #2d5016',
            margin: '-15px auto',
            position: 'relative'
          }}></div>
          <div style={{ 
            width: 0, 
            height: 0, 
            borderLeft: '80px solid transparent', 
            borderRight: '80px solid transparent',
            borderBottom: '100px solid #3d6b1f',
            margin: '-15px auto',
            position: 'relative'
          }}></div>
          <div style={{ 
            width: 0, 
            height: 0, 
            borderLeft: '100px solid transparent', 
            borderRight: '100px solid transparent',
            borderBottom: '120px solid #4d7c2f',
            margin: '-15px auto',
            position: 'relative'
          }}></div>
          <div style={{ 
            width: '40px', 
            height: '60px', 
            background: '#6f4e37',
            margin: '0 auto',
            borderRadius: '5px'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '280px',
            pointerEvents: 'none'
          }}>
            <span style={{ position: 'absolute', fontSize: '1.5rem', animation: 'blink 1.5s infinite', color: '#ff4444', top: '20px', left: '80px' }}>●</span>
            <span style={{ position: 'absolute', fontSize: '1.5rem', animation: 'blink 1.5s infinite', color: '#ffeb3b', top: '60px', left: '50px', animationDelay: '0.3s' }}>●</span>
            <span style={{ position: 'absolute', fontSize: '1.5rem', animation: 'blink 1.5s infinite', color: '#2196f3', top: '60px', right: '50px', animationDelay: '0.6s' }}>●</span>
            <span style={{ position: 'absolute', fontSize: '1.5rem', animation: 'blink 1.5s infinite', color: '#ff69b4', top: '120px', left: '30px', animationDelay: '0.9s' }}>●</span>
            <span style={{ position: 'absolute', fontSize: '1.5rem', animation: 'blink 1.5s infinite', color: '#4caf50', top: '120px', right: '30px', animationDelay: '1.2s' }}>●</span>
            <span style={{ position: 'absolute', fontSize: '1.5rem', animation: 'blink 1.5s infinite', color: '#ff9800', top: '180px', left: '80px', animationDelay: '1.5s' }}>●</span>
          </div>
        </div>
      </div>

      {/* Modal hướng dẫn */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '20px',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '20px',
              padding: '30px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              animation: 'slideIn 0.3s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{
              fontSize: 'clamp(1.5rem, 5vw, 2rem)',
              color: '#2d5016',
              marginBottom: '20px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}>
              🎄 Hướng Dẫn Sử Dụng 🎄
            </h2>
            
            <div style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
              lineHeight: '1.8',
              color: '#333',
              marginBottom: '25px'
            }}>
              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#d32f2f', fontSize: 'clamp(1rem, 2.8vw, 1.15rem)' }}>
                  📋 Bước 1:
                </strong>
                <p style={{ margin: '8px 0 0 0', paddingLeft: '10px' }}>
                  Đợi một lúc để tải tài nguyên
                </p>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#1976d2', fontSize: 'clamp(1rem, 2.8vw, 1.15rem)' }}>
                  🤖 Bước 2:
                </strong>
                <p style={{ margin: '8px 0 0 0', paddingLeft: '10px' }}>
                  Sau khi tải thành công thì bật AI lên sau đó cho phép camera
                </p>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#388e3c', fontSize: 'clamp(1rem, 2.8vw, 1.15rem)' }}>
                  ✋ Bước 3:
                </strong>
                <p style={{ margin: '8px 0 0 0', paddingLeft: '10px' }}>
                  Xoè bàn tay rộng sau đó giơ trước camera, và đợi khoảng 5s
                </p>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#f57c00', fontSize: 'clamp(1rem, 2.8vw, 1.15rem)' }}>
                  ✊ Bước 4:
                </strong>
                <p style={{ margin: '8px 0 0 0', paddingLeft: '10px' }}>
                  Xong rồi nắm nay lại thật nhanh, vẫn giơ trước camera nhé!!
                </p>
              </div>
            </div>

            <button
              onClick={handleOk}
              style={{
                width: '100%',
                padding: '15px 30px',
                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                fontWeight: 'bold',
                color: '#fff',
                backgroundColor: '#2d5016',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(45, 80, 22, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3d6b1f';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(45, 80, 22, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2d5016';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(45, 80, 22, 0.3)';
              }}
            >
              OK - Bắt Đầu 🎅
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideIn {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
