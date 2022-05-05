
  describe("some-evil-spec=792", () => {
    it("evil-block-792", () => {
      window.evil_792 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  