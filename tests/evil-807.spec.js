
  describe("some-evil-spec=807", () => {
    it("evil-block-807", () => {
      window.evil_807 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  