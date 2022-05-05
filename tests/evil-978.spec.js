
  describe("some-evil-spec=978", () => {
    it("evil-block-978", () => {
      window.evil_978 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  