
  describe("some-evil-spec=903", () => {
    it("evil-block-903", () => {
      window.evil_903 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  