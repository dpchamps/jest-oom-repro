
  describe("some-evil-spec=968", () => {
    it("evil-block-968", () => {
      window.evil_968 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  