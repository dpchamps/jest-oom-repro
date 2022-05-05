
  describe("some-evil-spec=299", () => {
    it("evil-block-299", () => {
      window.evil_299 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  