
  describe("some-evil-spec=260", () => {
    it("evil-block-260", () => {
      window.evil_260 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  