
  describe("some-evil-spec=435", () => {
    it("evil-block-435", () => {
      window.evil_435 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  