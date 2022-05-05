
  describe("some-evil-spec=598", () => {
    it("evil-block-598", () => {
      window.evil_598 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  