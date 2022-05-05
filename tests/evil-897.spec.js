
  describe("some-evil-spec=897", () => {
    it("evil-block-897", () => {
      window.evil_897 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  