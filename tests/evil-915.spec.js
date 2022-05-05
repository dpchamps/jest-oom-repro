
  describe("some-evil-spec=915", () => {
    it("evil-block-915", () => {
      window.evil_915 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  