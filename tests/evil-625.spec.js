
  describe("some-evil-spec=625", () => {
    it("evil-block-625", () => {
      window.evil_625 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  