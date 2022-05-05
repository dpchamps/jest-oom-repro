
  describe("some-evil-spec=916", () => {
    it("evil-block-916", () => {
      window.evil_916 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  