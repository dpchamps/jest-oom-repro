
  describe("some-evil-spec=55", () => {
    it("evil-block-55", () => {
      window.evil_55 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  