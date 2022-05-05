
  describe("some-evil-spec=35", () => {
    it("evil-block-35", () => {
      window.evil_35 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  