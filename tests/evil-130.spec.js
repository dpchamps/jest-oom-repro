
  describe("some-evil-spec=130", () => {
    it("evil-block-130", () => {
      window.evil_130 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  