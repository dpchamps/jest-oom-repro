
  describe("some-evil-spec=895", () => {
    it("evil-block-895", () => {
      window.evil_895 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  