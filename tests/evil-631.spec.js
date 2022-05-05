
  describe("some-evil-spec=631", () => {
    it("evil-block-631", () => {
      window.evil_631 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  