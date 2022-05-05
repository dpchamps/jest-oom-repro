
  describe("some-evil-spec=432", () => {
    it("evil-block-432", () => {
      window.evil_432 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  