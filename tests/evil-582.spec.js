
  describe("some-evil-spec=582", () => {
    it("evil-block-582", () => {
      window.evil_582 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  