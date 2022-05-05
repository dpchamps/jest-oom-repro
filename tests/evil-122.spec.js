
  describe("some-evil-spec=122", () => {
    it("evil-block-122", () => {
      window.evil_122 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  